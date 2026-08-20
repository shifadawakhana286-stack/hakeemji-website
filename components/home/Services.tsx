import Container from "../common/Container";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20"
    >
      <Container>

        <div className="text-center">

          <SectionTitle 
  title="Our"
  highlight="Services"
  subtitle="Traditional Unani therapies with modern care."
/>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="group rounded-3xl border border-gray-100 bg-[#F8F6F1] p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-[#0B5D3B] p-4 text-white transition-all group-hover:bg-[#C9A227]">

                  <Icon size={34} />

                </div>

                <h3 className="text-2xl font-semibold text-[#0B5D3B]">

                  {service.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-600">

                  {service.description}

                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-[#C9A227]">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>

            );
          })}

        </div>

      </Container>
    </section>
  );
}