import { Button } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="p-12">
      <p className="py-6">Home</p>
      <Button>Me button</Button>
    </div>
  );
};

export default Home;
