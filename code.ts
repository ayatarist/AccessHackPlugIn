
figma.showUI(__html__)

figma.ui.resize(500, 350)

figma.ui.onmessage = (message) => {
    if (message.type === "createHyperlink") {
        const url = message.url;
        createHyperlinkText(url);
    }
}

async function createHyperlinkText(url: any) {
    await figma.loadFontAsync({family: "Inter", style: "Regular"});
    const text = figma.createText();
    text.characters = "!!!";

    text.x = 100;
    text.y = 100;
    text.fontSize = 100;

    figma.currentPage.appendChild(text);
    console.log(url);
    text.setRelaunchData({url});

    figma.closePlugin();

}