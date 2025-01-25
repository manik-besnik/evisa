import WebLayout from "@/Layouts/WebLayout.jsx";
import SearchForm from "@/Components/Web/SearchForm.jsx";
import SearchResult from "@/Components/Web/SearchResult.jsx";
import {Head} from "@inertiajs/react";

const Search = () => {
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Search Result | Dubai E-Visa"/>
            <div className="container">
                <SearchForm/>
                <SearchResult/>
            </div>
        </WebLayout>
    )
}

export default Search
