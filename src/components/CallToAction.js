import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-primary to-secondary text-white">
      <h3 className="text-4xl font-bold">Ready to Work with Us?</h3>
      <p className="text-lg mt-4">Contact us today and let&apos;s discuss how we can help your project.</p>
      <Link href="/contact">
        <button className="mt-6 px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition hover:bg-gray-100">
          Get a Quote
        </button>
      </Link>
    </section>
  );
};

export default CallToAction;
