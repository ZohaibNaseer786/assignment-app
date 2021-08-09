const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6204,-122.3491&radius=2500&type=restaurant&key=AIzaSyDxVclNSQGB5WHAYQiHK-VxYKJelZ_9mjk'

class Api {
    static async headers() {
        return await {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    static get() {
        return this.xhr1('GET');
    }

    static async xhr1(verb) {
        try {
            const host = BASE_URL;
            const url = `${host}`;
            let options = Object.assign(
                {
                    method: verb,
                    mode: 'no-cors'
                },
                // params ? {body: params} : null,
            );
            // options.body = params;
            options.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'x-sh-auth': token,
            };
            // console.log(url, options);
            let response = await fetch(url, options);
            // console.log('response', response);
            if (response.ok) {
                // console.log('response', response);
                return await response.json();
            } else {
                //console.log('response',response.text());
                let d = await response.text();
                d = JSON.parse(d);
                d.code = response.status;
                //console.log('response',d,response);

                return d;
            }
        } catch (e) {
            return e.toString();
        }
    }
}

export default Api;