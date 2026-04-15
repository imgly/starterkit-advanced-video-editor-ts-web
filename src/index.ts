/**
 * CE.SDK Advanced Video Editor Starterkit - Main Entry Point
 *
 * Advanced video editing with full timeline and multi-track support.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initAdvancedVideoEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-advanced-video-editor-user'

  // Local assets
  // baseURL: `/assets/`,
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

    await cesdk.loadFromArchiveURL(
      'https://cdn.img.ly/packages/imgly/plugin-marketing-asset-source-web/1.0.0/assets/templates/animated-beauty-product.zip'
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
