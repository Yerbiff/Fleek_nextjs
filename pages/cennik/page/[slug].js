import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Pakiety from "@partials/Pakiety";


const PakietPagination = ({
  pakietIndex,
  pakiety,
  currentPage,
  pagination,
}) => {
  const indexOfLastPakiet = currentPage * pagination;
  const indexOfFirstPakiet = indexOfLastPakiet - pagination;
  const currentPakiety = pakiety.slice(indexOfFirstPakiet, indexOfLastPakiet);
  const { frontmatter} = pakietIndex;
  const { title } = frontmatter;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container text-center">
          {markdownify(title, "h1", "h2 mb-16")}
          <Pakiety pakiety={currentPakiety} />
        </div>
      </section>
    </Base>
  );
};

export default PakietPagination;

// get authors pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage("content/pakiety");
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get authors pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const pakiety = getSinglePage("content/pakiety");
  const pakietIndex = await getListPage("content/pakiety/_index.md");

  return {
    props: {
      pagination: pagination,
      pakiety: pakiety,
      currentPage: currentPage,
      pakietIndex: pakietIndex,
      mdxContent: pakietIndex.mdxContent,
    },
  };
};
