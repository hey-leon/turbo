import { Adapter } from "./native/adapter"
import { Session } from "./session"
import { Locatable } from "./url"
import { StreamMessage } from "./streams/stream_message"
import { StreamSource } from "./types"
import { VisitOptions } from "./drive/visit"
import { PageRenderer } from "./drive/page_renderer"
import { PageSnapshot } from "./drive/page_snapshot"
import { FrameRenderer } from "./frames/frame_renderer"
import { FormSubmission } from "./drive/form_submission"

const session = new Session()
const { navigator } = session
export { navigator, session, PageRenderer, PageSnapshot, FrameRenderer }

/**
 * Starts the main session.
 * This initialises any necessary observers such as those to monitor
 * link interactions.
 */
export function start() {
  session.start()
}

/**
 * Registers an adapter for the main session.
 *
 * @param adapter Adapter to register
 */
export function registerAdapter(adapter: Adapter) {
  session.registerAdapter(adapter)
}

/**
 * Performs an application visit to the given location.
 *
 * @param location Location to visit (a URL or path)
 * @param options Options to apply
 * @param options.action Type of history navigation to apply ("restore",
 * "replace" or "advance")
 * @param options.historyChanged Specifies whether the browser history has
 * already been changed for this visit or not
 * @param options.referrer Specifies the referrer of this visit such that
 * navigations to the same page will not result in a new history entry.
 * @param options.snapshotHTML Cached snapshot to render
 * @param options.response Response of the specified location
 */
export function visit(location: Locatable, options?: Partial<VisitOptions>) {
  session.visit(location, options)
}

/**
 * Connects a stream source to the main session.
 *
 * @param source Stream source to connect
 */
export function connectStreamSource(source: StreamSource) {
  session.connectStreamSource(source)
}

/**
 * Disconnects a stream source from the main session.
 *
 * @param source Stream source to disconnect
 */
export function disconnectStreamSource(source: StreamSource) {
  session.disconnectStreamSource(source)
}

/**
 * Renders a stream message to the main session by appending it to the
 * current document.
 *
 * @param message Message to render
 */
export function renderStreamMessage(message: StreamMessage | string) {
  session.renderStreamMessage(message)
}

/**
 * Removes all entries from the Turbo Drive page cache.
 * Call this when state has changed on the server that may affect cached pages.
 */
export function clearCache() {
  session.clearCache()
}

/**
 * Sets the delay after which the progress bar will appear during navigation.
 *
 * The progress bar appears after 500ms by default.
 *
 * Note that this method has no effect when used with the iOS or Android
 * adapters.
 *
 * @param delay Time to delay in milliseconds
 */
export function setProgressBarDelay(delay: number) {
  session.setProgressBarDelay(delay)
}

export function setConfirmMethod(confirmMethod: (message: string, element: HTMLFormElement) => Promise<boolean>) {
  FormSubmission.confirmMethod = confirmMethod
}
