import { useState, useEffect} from "react";
import axios from "axios";

const Fetch = () => {
    let [quote, setQuote] = useState('');
    let [author, setAuthor] = useState('');
    useEffect(() => {
        const abortController = new AbortController();
        axios.get("https://api.api-ninjas.com/v1/quotes", {'params': {'format': 'json'}, 'headers': {'X-Api-Key': 'vht0DblAtVbb/R5Hh8r2hQ==NbfTKI3hVjuqjWKG'}, responseType: "json"})
            .then(function (res) {
                setQuote(res.data[0].quote);
                setAuthor(res.data[0].author);
            })
    }, []);
    return (
        <>
            <div className="font-Wasabi text-3xl p-4 tracking-wider">{quote}</div>
            <div className="p-4 text-right">- {author}</div>
        </>
    );
    // return (
    //     <>
    //         <div className="font-Wasabi text-3xl p-4">Love built on beauty, soon as beauty, dies.</div>
    //         <div className="font-Kyoto p-2">Donne, John</div>
    //     </>
    // );
}
export default Fetch;