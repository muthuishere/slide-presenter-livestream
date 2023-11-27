
import marpCLI from '@marp-team/marp-cli/lib/marp-cli.js';
import liveServer from "live-server";
import {getCurrentProjectFolder} from "./shared/os_utils.js";

export async function startServer(outputfolder) {
  //   const args = ['-w','-p', '--server', serverFolder]
  // await    marpCLI.cliInterface(args)

    var params = {
        port: 9500, // Set the server port. Defaults to 8080.
        host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
        root: outputfolder, // Set root directory that's being served. Defaults to cwd.
        open: true, // When false, it won't load your browser by default.
        ignore: 'scss,my/templates', // comma-separated string for paths to ignore
        wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
    };
    liveServer.start(params);

}


