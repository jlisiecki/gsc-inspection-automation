{
    function last(selector) {
        return document.querySelectorAll(selector)[
            document.querySelectorAll(selector).length - 1
        ];
    }

    let resource = document.location.href;

    window.onpopstate = async () => {
        if (document.location.href === resource) return;
        resource = document.location.href;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await fetch('http://localhost:8463/savedata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: last('div.aZ52Wc > span').innerText,
                status: last('div > div.CC5fre').innerText,
                info: last('div.MreLB.jdejT.cJpr1b').innerText,
                resource
            })
        });
        console.log(JSON.parse(await res.text()));
    };
}
