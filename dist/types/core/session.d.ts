import { Adapter } from "./native/adapter";
import { CacheObserver } from "../observers/cache_observer";
import { FormSubmitObserver, FormSubmitObserverDelegate } from "../observers/form_submit_observer";
import { FrameRedirector } from "./frames/frame_redirector";
import { History, HistoryDelegate } from "./drive/history";
import { LinkClickObserver, LinkClickObserverDelegate } from "../observers/link_click_observer";
import { Locatable } from "./url";
import { Navigator, NavigatorDelegate } from "./drive/navigator";
import { PageObserver, PageObserverDelegate } from "../observers/page_observer";
import { ScrollObserver } from "../observers/scroll_observer";
import { StreamMessage } from "./streams/stream_message";
import { StreamObserver } from "../observers/stream_observer";
import { Action, Position, StreamSource } from "./types";
import { PageView, PageViewDelegate } from "./drive/page_view";
import { Visit, VisitOptions } from "./drive/visit";
import { PageSnapshot } from "./drive/page_snapshot";
import { FrameElement } from "../elements/frame_element";
import { FetchResponse } from "../http/fetch_response";
import { Preloader, PreloaderDelegate } from "./drive/preloader";
export declare type TimingData = {};
export declare class Session implements FormSubmitObserverDelegate, HistoryDelegate, LinkClickObserverDelegate, NavigatorDelegate, PageObserverDelegate, PageViewDelegate, PreloaderDelegate {
    readonly navigator: Navigator;
    readonly history: History;
    readonly preloader: Preloader;
    readonly view: PageView;
    adapter: Adapter;
    readonly pageObserver: PageObserver;
    readonly cacheObserver: CacheObserver;
    readonly linkClickObserver: LinkClickObserver;
    readonly formSubmitObserver: FormSubmitObserver;
    readonly scrollObserver: ScrollObserver;
    readonly streamObserver: StreamObserver;
    readonly frameRedirector: FrameRedirector;
    drive: boolean;
    enabled: boolean;
    progressBarDelay: number;
    started: boolean;
    start(): void;
    disable(): void;
    stop(): void;
    registerAdapter(adapter: Adapter): void;
    visit(location: Locatable, options?: Partial<VisitOptions>): void;
    connectStreamSource(source: StreamSource): void;
    disconnectStreamSource(source: StreamSource): void;
    renderStreamMessage(message: StreamMessage | string): void;
    clearCache(): void;
    setProgressBarDelay(delay: number): void;
    get location(): URL;
    get restorationIdentifier(): string;
    historyPoppedToLocationWithRestorationIdentifier(location: URL, restorationIdentifier: string): void;
    scrollPositionChanged(position: Position): void;
    willFollowLinkToLocation(link: Element, location: URL): boolean;
    followedLinkToLocation(link: Element, location: URL): void;
    convertLinkWithMethodClickToFormSubmission(link: Element): false | CustomEvent<any>;
    allowsVisitingLocationWithAction(location: URL, action?: Action): boolean;
    visitProposedToLocation(location: URL, options: Partial<VisitOptions>): void;
    visitStarted(visit: Visit): void;
    visitCompleted(visit: Visit): void;
    locationWithActionIsSamePage(location: URL, action?: Action): boolean;
    visitScrolledToSamePageLocation(oldURL: URL, newURL: URL): void;
    willSubmitForm(form: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmitted(form: HTMLFormElement, submitter?: HTMLElement): void;
    pageBecameInteractive(): void;
    pageLoaded(): void;
    pageWillUnload(): void;
    receivedMessageFromStream(message: StreamMessage): void;
    viewWillCacheSnapshot(): void;
    allowsImmediateRender({ element }: PageSnapshot, resume: (value: any) => void): boolean;
    viewRenderedSnapshot(snapshot: PageSnapshot, isPreview: boolean): void;
    preloadOnLoadLinksForView(element: Element): void;
    viewInvalidated(): void;
    frameLoaded(frame: FrameElement): void;
    frameRendered(fetchResponse: FetchResponse, frame: FrameElement): void;
    applicationAllowsFollowingLinkToLocation(link: Element, location: URL): boolean;
    applicationAllowsVisitingLocation(location: URL): boolean;
    notifyApplicationAfterClickingLinkToLocation(link: Element, location: URL): CustomEvent<any>;
    notifyApplicationBeforeVisitingLocation(location: URL): CustomEvent<any>;
    notifyApplicationAfterVisitingLocation(location: URL, action: Action): CustomEvent<any>;
    notifyApplicationBeforeCachingSnapshot(): CustomEvent<any>;
    notifyApplicationBeforeRender(newBody: HTMLBodyElement, resume: (value: any) => void): CustomEvent<any>;
    notifyApplicationAfterRender(): CustomEvent<any>;
    notifyApplicationAfterPageLoad(timing?: TimingData): CustomEvent<any>;
    notifyApplicationAfterVisitingSamePageLocation(oldURL: URL, newURL: URL): void;
    notifyApplicationAfterFrameLoad(frame: FrameElement): CustomEvent<any>;
    notifyApplicationAfterFrameRender(fetchResponse: FetchResponse, frame: FrameElement): CustomEvent<any>;
    elementDriveEnabled(element?: Element): boolean;
    getActionForLink(link: Element): Action;
    getTargetFrameForLink(link: Element): string | undefined;
    get snapshot(): PageSnapshot;
}
