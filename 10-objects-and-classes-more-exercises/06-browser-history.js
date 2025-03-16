function browserHistory(browserInfo, commandsArr) {
    for (let commandInfo of commandsArr) {
        let [command, ...siteInfo] = commandInfo.split(' ');
        let site = siteInfo.join(' ');

        if (command == 'Open') {

            browserInfo["Open Tabs"].push(site);
            browserInfo["Browser Logs"].push(commandInfo);

        } else if (command == 'Close') {

            if (browserInfo["Open Tabs"].includes(site)) {
                browserInfo["Open Tabs"] = browserInfo["Open Tabs"].filter((x) => x != site);
                browserInfo["Recently Closed"].push(site);
                browserInfo["Browser Logs"].push(commandInfo);
            }

        } else if (commandInfo == 'Clear History and Cache') {

            browserInfo["Open Tabs"] = [];
            browserInfo["Recently Closed"] = [];
            browserInfo["Browser Logs"] = [];

        }

    }

    console.log(browserInfo["Browser Name"]);
    console.log(`Open Tabs: ${browserInfo["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserInfo["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserInfo["Browser Logs"].join(', ')}`);


}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

);