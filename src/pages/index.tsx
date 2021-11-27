import { GetServerSideProps } from "next";
import { Home } from "views/Home";

export default function Index(props: any) {
  return <Home />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  };
};
