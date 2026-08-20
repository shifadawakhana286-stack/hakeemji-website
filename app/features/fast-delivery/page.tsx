import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  MapPin,
  MessageCircle,
  Package,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import Container from "@/components/common/Container";

export default function FastDeliveryPage() {
  const deliverySteps = [
    {
      number: "01",
      icon: ShoppingBag,
      title: "Place Your Order",
      description:
        "Browse our medicines and place your order through the website or contact our team on WhatsApp.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Order Confirmation",
      description:
        "Our team can contact you through WhatsApp to confirm your order, delivery details and availability.",
    },
    {
      number: "03",
      icon: Package,
      title: "Careful Packaging",
      description:
        "Your selected products are prepared and packed carefully before dispatch.",
    },
    {
      number: "04",
      icon: Truck,
      title: "Dispatch",
      description:
        "Once your order is ready, it is handed over for delivery to your provided address.",
    },
    {
      number: "05",
      icon: MapPin,
      title: "Delivered to You",
      description:
        "Your order is delivered to the address provided during order confirmation, subject to serviceability.",
    },
  ];

  const deliveryInfo = [
    "Delivery is available across India, subject to pincode and courier serviceability.",
    "Delivery timelines may vary depending on your location and the delivery network.",
    "Orders are processed after product availability and order details are confirmed.",
    "You may contact our team on WhatsApp for order-related assistance.",
    "Certain products may have specific purchase or dispatch requirements.",
    "For prescription-required medicines, applicable prescription and legal requirements must be followed.",
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#0B5D3B]
          px-4
          pb-20
          pt-28
          text-white
          sm:px-6
          sm:pb-24
          sm:pt-32
          lg:pb-28
          lg:pt-36
        "
      >

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-80
            w-80
            rounded-full
            bg-[#C9A227]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-96
            w-96
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        <Container>

          {/* Back */}

          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div
            className="
              mt-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >

            {/* LEFT */}

            <div>

              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[22px]
                  bg-[#C9A227]
                  text-white
                  shadow-xl
                "
              >
                <Truck
                  size={32}
                  strokeWidth={1.8}
                />
              </div>

              {/* Label */}

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E5C64F]
                "
              >
                Nationwide Delivery
              </p>

              {/* Heading */}

              <h1
                className="
                  mt-4
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Your Medicines,
                <span className="block text-[#C9A227]">
                  Delivered Across India
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/75
                  sm:text-lg
                "
              >
                Order selected products from Shifa Dawakhana
                and get them delivered conveniently to your
                address across India, subject to serviceability.
              </p>

              {/* CTA */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#C9A227]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#D9B52F]
                    hover:shadow-xl
                  "
                >
                  Shop Medicines
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20want%20to%20enquire%20about%20medicine%20delivery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#0B5D3B]
                  "
                >
                  <MessageCircle size={18} />
                  Ask on WhatsApp
                </a>

              </div>

            </div>

            {/* RIGHT DELIVERY CARD */}

            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white
                p-6
                text-[#083C2A]
                shadow-2xl
                sm:p-8
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F8F1DD]
                    text-[#C9A227]
                  "
                >
                  <MapPin size={24} />
                </div>

                <span
                  className="
                    rounded-full
                    bg-[#0B5D3B]/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-[#0B5D3B]
                  "
                >
                  All India
                </span>

              </div>

              <h2 className="mt-7 text-2xl font-bold sm:text-3xl">
                Nationwide Delivery
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We aim to make ordering your selected Unani
                products convenient, wherever you are in India.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0B5D3B]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Pan-India Availability
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Delivery available across India,
                      subject to pincode serviceability.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0B5D3B]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Carefully Packed
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Products are prepared and packed before
                      dispatch.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0B5D3B]"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Order Assistance
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Contact our team through WhatsApp for
                      order-related assistance.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          HOW DELIVERY WORKS
      ===================================================== */}

      <section
        className="
          bg-white
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                inline-flex
                rounded-full
                bg-[#C9A227]/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C9A227]
              "
            >
              Simple & Convenient
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-[#083C2A]
                sm:text-4xl
                lg:text-5xl
              "
            >
              How Your Order Reaches You
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              From placing your order to receiving it at your
              doorstep, we keep the process simple and clear.
            </p>

          </div>

          {/* Steps */}

          <div
            className="
              mt-12
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >

            {deliverySteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    rounded-[26px]
                    border
                    border-gray-100
                    bg-[#F8F6F1]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div className="flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#0B5D3B]
                        text-white
                        transition
                        group-hover:bg-[#C9A227]
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-bold
                        tracking-widest
                        text-[#C9A227]
                      "
                    >
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#083C2A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </Container>

      </section>

      {/* =====================================================
          DELIVERY INFORMATION
      ===================================================== */}

      <section
        className="
          bg-[#F8F6F1]
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >

        <Container>

          <div
            className="
              grid
              items-start
              gap-8
              lg:grid-cols-[0.85fr_1.15fr]
            "
          >

            {/* Left */}

            <div>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#C9A227]
                "
              >
                Delivery Information
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#083C2A]
                  sm:text-4xl
                "
              >
                Everything You
                <span className="text-[#0B5D3B]">
                  {" "}Need to Know
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                We want your ordering experience to be simple
                and transparent. Delivery details may vary
                depending on the destination and product.
              </p>

              <div
                className="
                  mt-7
                  rounded-[26px]
                  bg-[#083C2A]
                  p-6
                  text-white
                  sm:p-7
                "
              >

                <Truck
                  size={30}
                  className="text-[#C9A227]"
                />

                <h3 className="mt-5 text-xl font-bold">
                  India-Wide Delivery
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  We accept delivery requests from locations
                  across India where courier service is
                  available.
                </p>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                rounded-[30px]
                bg-white
                p-6
                shadow-lg
                sm:p-9
              "
            >

              <h3 className="text-2xl font-bold text-[#083C2A]">
                Important Delivery Details
              </h3>

              <div className="mt-7 space-y-5">

                {deliveryInfo.map((info) => (
                  <div
                    key={info}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#C9A227]
                      "
                    />

                    <p className="text-sm leading-7 text-gray-600">
                      {info}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          DELIVERY TIMING
      ===================================================== */}

      <section
        className="
          bg-white
          px-4
          py-16
          sm:px-6
          sm:py-20
        "
      >

        <Container>

          <div
            className="
              mx-auto
              max-w-5xl
              rounded-[30px]
              border
              border-[#0B5D3B]/10
              bg-[#F8F6F1]
              p-6
              sm:p-9
            "
          >

            <div className="grid gap-8 md:grid-cols-3">

              {/* Processing */}

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0B5D3B]
                    text-white
                  "
                >
                  <Package size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-[#083C2A]">
                    Order Processing
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Orders are prepared after availability
                    and details are confirmed.
                  </p>

                </div>

              </div>

              {/* Delivery */}

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#C9A227]
                    text-white
                  "
                >
                  <Clock3 size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-[#083C2A]">
                    Delivery Timeline
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Delivery time depends on destination,
                    courier network and serviceability.
                  </p>

                </div>

              </div>

              {/* Support */}

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0B5D3B]
                    text-white
                  "
                >
                  <Headphones size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-[#083C2A]">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Contact our team through WhatsApp for
                    order and delivery assistance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          bg-[#0B5D3B]
          px-4
          py-16
          text-center
          sm:px-6
          sm:py-20
        "
      >

        <Container>

          <div className="mx-auto max-w-3xl">

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#C9A227]
                text-white
              "
            >
              <Truck size={25} />
            </div>

            <p
              className="
                mt-5
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C9A227]
              "
            >
              Shop From Anywhere
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Order Your Medicines
              <span className="text-[#C9A227]">
                {" "}With Ease
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              "
            >
              Browse our collection or contact our team
              directly for assistance with your order.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >

              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C9A227]
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-[#D9B52F]
                "
              >
                <ShoppingBag size={18} />
                Shop Medicines
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20want%20to%20place%20a%20medicine%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#0B5D3B]
                "
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}