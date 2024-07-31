/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<e7852212097fb9d6e9f929b19a99e279>>
 * @flow strict-local
 */

/**
 * IMPORTANT: Do NOT modify this file directly.
 *
 * To change the definition of the flags, edit
 *   packages/react-native/scripts/featureflags/ReactNativeFeatureFlags.config.js.
 *
 * To regenerate this code, run the following script from the repo root:
 *   yarn featureflags-update
 */

import type {TurboModule} from '../../../../Libraries/TurboModule/RCTExport';

import * as TurboModuleRegistry from '../../../../Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +commonTestFlag?: () => boolean;
  +allowCollapsableChildren?: () => boolean;
  +allowRecursiveCommitsWithSynchronousMountOnAndroid?: () => boolean;
  +batchRenderingUpdatesInEventLoop?: () => boolean;
  +changeOrderOfMountingInstructionsOnAndroid?: () => boolean;
  +completeReactInstanceCreationOnBgThreadOnAndroid?: () => boolean;
  +destroyFabricSurfacesInReactInstanceManager?: () => boolean;
  +enableAlignItemsBaselineOnFabricIOS?: () => boolean;
  +enableBackgroundStyleApplicator?: () => boolean;
  +enableCleanTextInputYogaNode?: () => boolean;
  +enableEagerRootViewAttachment?: () => boolean;
  +enableFabricLogs?: () => boolean;
  +enableFabricRendererExclusively?: () => boolean;
  +enableGranularShadowTreeStateReconciliation?: () => boolean;
  +enableLongTaskAPI?: () => boolean;
  +enableMicrotasks?: () => boolean;
  +enablePropsUpdateReconciliationAndroid?: () => boolean;
  +enableReportEventPaintTime?: () => boolean;
  +enableSynchronousStateUpdates?: () => boolean;
  +enableUIConsistency?: () => boolean;
  +enableViewRecycling?: () => boolean;
  +excludeYogaFromRawProps?: () => boolean;
  +fetchImagesInViewPreallocation?: () => boolean;
  +fixIncorrectScrollViewStateUpdateOnAndroid?: () => boolean;
  +fixMappingOfEventPrioritiesBetweenFabricAndReact?: () => boolean;
  +fixMissedFabricStateUpdatesOnAndroid?: () => boolean;
  +forceBatchingMountItemsOnAndroid?: () => boolean;
  +fuseboxEnabledDebug?: () => boolean;
  +fuseboxEnabledRelease?: () => boolean;
  +initEagerTurboModulesOnNativeModulesQueueAndroid?: () => boolean;
  +lazyAnimationCallbacks?: () => boolean;
  +loadVectorDrawablesOnImages?: () => boolean;
  +setAndroidLayoutDirection?: () => boolean;
  +traceTurboModulePromiseRejectionsOnAndroid?: () => boolean;
  +useFabricInterop?: () => boolean;
  +useImmediateExecutorInAndroidBridgeless?: () => boolean;
  +useModernRuntimeScheduler?: () => boolean;
  +useNativeViewConfigsInBridgelessMode?: () => boolean;
  +useNewReactImageViewBackgroundDrawing?: () => boolean;
  +useOptimisedViewPreallocationOnAndroid?: () => boolean;
  +useRuntimeShadowNodeReferenceUpdate?: () => boolean;
  +useRuntimeShadowNodeReferenceUpdateOnLayout?: () => boolean;
  +useStateAlignmentMechanism?: () => boolean;
  +useTurboModuleInterop?: () => boolean;
}

const NativeReactNativeFeatureFlags: ?Spec = TurboModuleRegistry.get<Spec>(
  'NativeReactNativeFeatureFlagsCxx',
);

export default NativeReactNativeFeatureFlags;
