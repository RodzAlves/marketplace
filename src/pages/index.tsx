import { GetServerSideProps } from "next";
import { CardItemProps } from "components/Elements";
import { api } from "services/api";
import { Home } from "views/Home";

export type HomeProps = {
  items: CardItemProps[];
};

export default function Index({ items }: HomeProps) {
  return <Home items={items} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get<CardItemProps[]>("/products");

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      items: data
    }
  };
};
