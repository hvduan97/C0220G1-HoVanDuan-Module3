function search(key) {
    interface ISingleRepo {
        name: string;
    }

    interface IRepos {
        items: Array<ISingleRepo>;
    }

    let keyword: String = 'https://api.github.com/search/repositories?q=' + key;

    async function fetchRepo(): Promise<Array<ISingleRepo>> {
        let res: Response | IRepos = await fetch(keyword);
        res = await res.json() as IRepos;
        return res.items;
    }

    function createItem(text: string): HTMLLIElement {
        const item = document.createElement('li') as HTMLLIElement;
        item.textContent = text;
        return item;
    }

    const container = document.querySelector('.app .list');

    async function main() {
        $("table").children().remove();
        const res = await fetchRepo();
        $("table").append('<tr style="border: black">\n'
            + '<td>Project</td>\n'
            + '<td>Repo</td>\n'
            + '</tr>')
        res.forEach((item: any) => {
            console.log(item)
            $("table").append('<tr style="border: black">'
                + '<td>' + item.name + '</td>'
                + '<td><a href="' + item.html_url + '">' + item.html_url + '</a></td>'
                + '</tr>');
        });
    }

    main();
}


