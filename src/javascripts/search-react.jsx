import React from "react";
import { createRoot } from "react-dom/client";

import S_SearchContent from "../components/S_SearchContent.jsx";

const app = document.querySelector('#app');
const root = createRoot(app);

function getSearchRequest () {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    if (searchParams.has('request')) {
        return searchParams.get('request')
    }
    else {
        return '';
    }
}

root.render(
    <S_SearchContent searchInputValue={getSearchRequest} />
)