export class Bejegyzes {
    title: string;
    contents: string[];
    color: string;
    constructor(title: string, contents: string[], color: string) {
        if (title.trim() == "" || title == undefined || typeof title != 'string' || title == null) {
            throw new Error(`A cím nincs meggelelően megadva. Cím: '${title}'`);
        };

        let content: string = '';
        contents.forEach(element => {
            content += `${element}\n\n`
        });
        if (content.trim() == "" || content == undefined || typeof content != 'string' || content == null) {
            throw new Error(`A tartalom nincs meggelelően megadva. Tartalom: '${content}'`);
        };

        if (color.trim() == "" || color == undefined || typeof color != 'string' || color == null || color.length != 7 || color[0] != '#') {
            throw new Error(`A szín nincs meggelelően megadva. Szín: '${color}'`);
        };
        this.title = title;
        this.contents = contents;
        this.color = color;
    };
};