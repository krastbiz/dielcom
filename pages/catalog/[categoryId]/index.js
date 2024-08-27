import Head from 'next/head';
import { Catalog } from '../../../components/CatalogPage/Catalog';
import { getCatalogPageUrl } from '../../../lib/utils/routeHelper';
import { getPageMetadata, getPageCanonical } from '../../../lib/utils/pageHelper';
import { CATEGORIES_ARRAY } from '../../../mock-data';
import { kebabToCamel } from '../../../lib/utils/helpers';

const CategoryPage = ({ category }) => {
    const pageTitle = `Продукты в категории ${category.name}`;
    const pageDescription = `Посмотрите все продукты в категории ${category.name}`;
    const pageRelativeUrl = getCatalogPageUrl();

    return (
        <>
            <Head>
                {getPageMetadata(pageTitle, pageDescription)}
                {getPageCanonical(pageRelativeUrl)}
            </Head>
            <Catalog categories={[category]} />
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const { categoryId } = params;
    const category = CATEGORIES_ARRAY.get(kebabToCamel(categoryId));

    if (!category) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            category,
        },
    };
};

export default CategoryPage;
