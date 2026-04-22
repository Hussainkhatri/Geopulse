interface Article {
    title: string;
    content: string;
    author: string;
    publishedDate: string;
}

interface NewsResponse {
    articles: Article[];
    status: string;
}

interface Country {
    name: string;
    alpha2Code: string;
    alpha3Code: string;
}

interface CurrencyRate {
    currency: string;
    rate: number;
}

interface CurrentAffair {
    headline: string;
    description: string;
    date: string;
}

interface NewsCategory {
    id: number;
    name: string;
}