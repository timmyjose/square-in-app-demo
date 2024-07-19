import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core'

// Import the native module. On web, it will be resolved to ReactNativeInAppPayment.web.ts
// and on native platforms to ReactNativeInAppPayment.ts
import ReactNativeInAppPaymentModule from './ReactNativeInAppPaymentModule'
import ReactNativeInAppPaymentView from './ReactNativeInAppPaymentView'
import { ChangeEventPayload, ReactNativeInAppPaymentViewProps } from './ReactNativeInAppPayment.types'

// Get the native constant value.
export const PI = ReactNativeInAppPaymentModule.PI

export function hello(): string {
  return ReactNativeInAppPaymentModule.hello()
}

export async function setValueAsync(value: string) {
  return await ReactNativeInAppPaymentModule.setValueAsync(value)
}

const emitter = new EventEmitter(ReactNativeInAppPaymentModule ?? NativeModulesProxy.ReactNativeInAppPayment)

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener)
}

export { ReactNativeInAppPaymentView, ReactNativeInAppPaymentViewProps, ChangeEventPayload }
