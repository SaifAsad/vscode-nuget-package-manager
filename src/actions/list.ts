import * as vscode from "vscode";
import * as path from "path";

import { emptyString, CANCEL } from "../constants";
import { showInformationMessage, clearStatusBar } from "./shared/";
import { listInstalledPackages } from "./list-methods";

export function listNuGetPackages() {
  listInstalledPackages().then(undefined, (err) => {
    clearStatusBar();
    if (err !== CANCEL) {
      vscode.window.showErrorMessage(
        err.message || err || "Something went wrong! Please try again."
      );
    }
  });
}
