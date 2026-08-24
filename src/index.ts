/**
 * CE.SDK Advanced Video Editor Starterkit - Main Entry Point
 *
 * Advanced video editing with full timeline and multi-track support.
 *
 * @see https://img.ly/docs/cesdk/js/get-started/overview-e18f40/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initAdvancedVideoEditor } from './imgly';

/**
 * Demo assets for this example (scene archives, …) are loaded from the
 * IMG.LY CDN by default. To host them yourself, copy this kit's asset
 * folder to your own CDN or server and change this constant — or set it to
 * `''` and place the files in this app's `public/` directory. No trailing
 * slash.
 */
export const DEMO_ASSETS_BASE_URL: string =
  import.meta.env.VITE_DEMO_ASSETS_BASE_URL ||
  'https://staticimgly.com/imgly/cesdk-web-examples-data/1.81.0/starterkit-advanced-video-editor';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-advanced-video-editor-user',

  // IMG.LY CDN (for quick testing only, NOT recommended for production)

  // Local assets for development

};

// ============================================================================
// Initialize Advanced Video Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initAdvancedVideoEditor(cesdk);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    await cesdk.load(
      `${DEMO_ASSETS_BASE_URL}/assets/templates/lunar-video-default.imgly`
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
