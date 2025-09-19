import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />
      <Button styles="rounded-lg" title="Click Here" />
      <Button styles="rounded-sm" title="Click Here" />
      <Button styles="rounded-full" title="Click Here" />
    </div>
  );
};

export default Landing;
