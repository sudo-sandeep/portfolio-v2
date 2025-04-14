import Link from "next/link";

const SLocation = () => {
  return (
    <section className="bg-white py-12 rounded-xl px-6 hover:text-white hover:bg-primary cursor-pointer text-center">
      <Link href="https://maps.app.goo.gl/CzHmJ3Qw7tZkbdGE6" target="_blank" referrerPolicy="no-referrer" className="uppercase text-4xl font-bold md:text-6xl w-full">
        View My Live Map Location
      </Link>
    </section>
  );
};

export default SLocation;
