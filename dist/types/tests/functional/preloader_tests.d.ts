import { TurboDriveTestCase } from "../helpers/turbo_drive_test_case";
export declare class PreloaderTests extends TurboDriveTestCase {
    "test preloads snapshot on initial load"(): Promise<void>;
    "test preloads snapshot on page visit"(): Promise<void>;
    "test navigates to preloaded snapshot from eager frame"(): Promise<void>;
}
