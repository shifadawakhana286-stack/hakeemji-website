"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Search, ArrowRight, Package, HeartPulse } from "lucide-react";

import { products } from "@/data/products";
import { treatments } from "@/data/treatments";

interface Props {
  open: boolean;
  onClose: () => void;
}

const recentDefault = [
  "Diabetes",
  "Hijama",
  "Hair Care",
];

const popular = [
  "Majoon",
  "Sharbat",
  "Qurs",
  "Capsule",
  "Oil",
];

export default function SearchModal({
  open,
  onClose,
}: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] =
    useState<string[]>(recentDefault);

  const inputRef = useRef<HTMLInputElement>(null);

  /* =========================================
     AUTO FOCUS WHEN SEARCH OPENS
  ========================================= */

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [open]);

  /* =========================================
     ESC KEY CLOSE
  ========================================= */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /* =========================================
     SEARCH PRODUCTS + TREATMENTS
  ========================================= */

  const searchResults = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) {
      return {
        products: [],
        treatments: [],
      };
    }

    /* -----------------------------------------
       PRODUCTS
    ----------------------------------------- */

    const matchedProducts = products.filter((product) => {
      const searchableText = [
        product.name,
        product.description,
        product.shortDescription,
        product.seoDescription,
        product.ingredients,
        product.uses,
      ].join(" ").toLowerCase();

      return searchableText.includes(searchText);
    });

    /* -----------------------------------------
       TREATMENTS
    ----------------------------------------- */

    const matchedTreatments = treatments.filter((treatment) => {
      const searchableText = [
        treatment.title,
        treatment.shortDescription,
        treatment.details,
        treatment.doctorNote,
        treatment.symptoms,
        treatment.medicines,
        treatment.benefits,
        treatment.ingredients,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchText);
    });

    return {
      products: matchedProducts.slice(0, 6),
      treatments: matchedTreatments.slice(0, 6),
    };
  }, [query]);

  const totalResults =
    searchResults.products.length +
    searchResults.treatments.length;

  /* =========================================
     SAVE RECENT SEARCH
  ========================================= */

  const saveRecentSearch = (value: string) => {
    const cleanValue = value.trim();

    if (!cleanValue) return;

    setRecentSearches((previous) => {
      const updated = [
        cleanValue,
        ...previous.filter(
          (item) =>
            item.toLowerCase() !==
            cleanValue.toLowerCase()
        ),
      ];

      return updated.slice(0, 5);
    });
  };

  /* =========================================
     PRODUCT CLICK
  ========================================= */

  const openProduct = (id: number) => {
    saveRecentSearch(query);
    onClose();

    router.push(`/shop/${id}`);
  };

  /* =========================================
     TREATMENT CLICK
  ========================================= */

  const openTreatment = (slug: string) => {
    saveRecentSearch(query);
    onClose();

    router.push(`/treatments/${slug}`);
  };

  /* =========================================
     CHIP CLICK
  ========================================= */

  const selectSearch = (value: string) => {
    setQuery(value);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  /* =========================================
     ENTER KEY
  ========================================= */

  const handleEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;

    const value = query.trim();

    if (!value) return;

    saveRecentSearch(value);

    if (searchResults.products.length > 0) {
      onClose();
      router.push(`/shop/${searchResults.products[0].id}`);
      return;
    }

    if (searchResults.treatments.length > 0) {
      onClose();
      router.push(
        `/treatments/${searchResults.treatments[0].slug}`
      );
    }
  };

  /* =========================================
     MODAL CLOSED
  ========================================= */

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/50
        p-2
        sm:p-4
        md:py-8
        backdrop-blur-sm
        flex
        items-start
        justify-center
        overflow-y-auto
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          w-full
          max-w-2xl
          mt-2
          sm:mt-10
          md:mt-20
          max-h-[92vh]
          sm:max-h-[85vh]
          overflow-hidden
          rounded-2xl
          sm:rounded-[28px]
          bg-white
          shadow-2xl
          flex
          flex-col
        "
      >

        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-gray-100
            px-4
            py-3.5
            sm:px-6
            sm:py-5
            md:px-8
          "
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#083C2A]">
              Search
            </h2>

            <p className="text-xs sm:text-sm text-gray-500">
              Search medicines and treatments
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              text-gray-600
              transition
              hover:border-[#C9A227]
              hover:bg-[#C9A227]
              hover:text-white
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* =====================================
            SEARCH INPUT
        ====================================== */}

        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8">
          <div
            className="
              flex
              items-center
              rounded-full
              border-2
              border-gray-100
              bg-[#F8F6F1]
              px-4
              sm:px-5
              transition
              focus-within:border-[#0B5D3B]
              focus-within:bg-white
            "
          >
            <Search
              size={19}
              className="shrink-0 text-[#0B5D3B]"
            />

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              onKeyDown={handleEnter}
              placeholder="Search medicine, treatment, symptom..."
              className="
                w-full
                bg-transparent
                py-3
                px-3
                sm:p-4
                text-sm
                text-gray-800
                outline-none
                placeholder:text-gray-400
              "
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear query"
                className="
                  text-gray-400
                  transition
                  hover:text-[#0B5D3B]
                  p-1
                "
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* =====================================
            RESULTS
        ====================================== */}

        {query.trim() ? (
          <div
            className="
              max-h-[55vh]
              overflow-y-auto
              px-6
              pb-8
              pt-6
              md:px-8
            "
          >

            {/* NO RESULTS */}

            {totalResults === 0 ? (
              <div className="py-12 text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F6F1]
                  "
                >
                  <Search
                    size={26}
                    className="text-gray-400"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-[#083C2A]">
                  No results found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another medicine, treatment, or symptom.
                </p>

              </div>
            ) : (
              <div className="space-y-8">

                {/* =================================
                    MEDICINES
                ================================== */}

                {searchResults.products.length > 0 && (
                  <div>

                    <div className="mb-4 flex items-center gap-2">
                      <Package
                        size={19}
                        className="text-[#C9A227]"
                      />

                      <h3 className="font-semibold text-[#083C2A]">
                        Medicines
                      </h3>

                      <span className="text-xs text-gray-400">
                        ({searchResults.products.length})
                      </span>
                    </div>

                    <div className="space-y-2">

                      {searchResults.products.map(
                        (product) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() =>
                              openProduct(product.id)
                            }
                            className="
                              group
                              flex
                              w-full
                              items-center
                              gap-4
                              rounded-2xl
                              border
                              border-gray-100
                              bg-white
                              p-3
                              text-left
                              transition-all
                              hover:border-[#C9A227]/40
                              hover:bg-[#F8F6F1]
                            "
                          >

                            {/* Product Image */}

                            <div
                              className="
                                h-16
                                w-16
                                shrink-0
                                overflow-hidden
                                rounded-xl
                                bg-[#F8F6F1]
                              "
                            >
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={64}
                                height={64}
                                className="
                                  h-full
                                  w-full
                                  object-contain
                                "
                              />
                            </div>

                            {/* Product Info */}

                            <div className="min-w-0 flex-1">

                              <h4 className="truncate font-semibold text-[#083C2A]">
                                {product.name}
                              </h4>

                              <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                                {product.shortDescription}
                              </p>

                            </div>

                            <ArrowRight
                              size={18}
                              className="
                                shrink-0
                                text-gray-400
                                transition
                                group-hover:translate-x-1
                                group-hover:text-[#C9A227]
                              "
                            />

                          </button>
                        )
                      )}

                    </div>
                  </div>
                )}

                {/* =================================
                    TREATMENTS
                ================================== */}

                {searchResults.treatments.length > 0 && (
                  <div>

                    <div className="mb-4 flex items-center gap-2">
                      <HeartPulse
                        size={19}
                        className="text-[#C9A227]"
                      />

                      <h3 className="font-semibold text-[#083C2A]">
                        Treatments
                      </h3>

                      <span className="text-xs text-gray-400">
                        ({searchResults.treatments.length})
                      </span>
                    </div>

                    <div className="space-y-2">

                      {searchResults.treatments.map(
                        (treatment) => (
                          <button
                            key={treatment.id}
                            type="button"
                            onClick={() =>
                              openTreatment(
                                treatment.slug
                              )
                            }
                            className="
                              group
                              flex
                              w-full
                              items-center
                              gap-4
                              rounded-2xl
                              border
                              border-gray-100
                              bg-white
                              p-3
                              text-left
                              transition-all
                              hover:border-[#C9A227]/40
                              hover:bg-[#F8F6F1]
                            "
                          >

                            {/* Treatment Image */}

                            <div
                              className="
                                h-16
                                w-16
                                shrink-0
                                overflow-hidden
                                rounded-xl
                                bg-[#F8F6F1]
                              "
                            >
                              <Image
                                src={treatment.image}
                                alt={treatment.title}
                                width={64}
                                height={64}
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                "
                              />
                            </div>

                            {/* Treatment Info */}

                            <div className="min-w-0 flex-1">

                              <h4 className="truncate font-semibold text-[#083C2A]">
                                {treatment.title}
                              </h4>

                              <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                                {treatment.shortDescription}
                              </p>

                            </div>

                            <ArrowRight
                              size={18}
                              className="
                                shrink-0
                                text-gray-400
                                transition
                                group-hover:translate-x-1
                                group-hover:text-[#C9A227]
                              "
                            />

                          </button>
                        )
                      )}

                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        ) : (

          /* =====================================
             RECENT + POPULAR
          ====================================== */

          <div className="px-6 pb-8 pt-7 md:px-8">

            {/* Recent Searches */}

            <div>

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-[#083C2A]">
                  Recent Searches
                </h3>

                {recentSearches.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setRecentSearches([])
                    }
                    className="
                      text-xs
                      text-gray-400
                      transition
                      hover:text-[#0B5D3B]
                    "
                  >
                    Clear
                  </button>
                )}

              </div>

              <div className="mt-3 flex flex-wrap gap-2">

                {recentSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      selectSearch(item)
                    }
                    className="
                      rounded-full
                      bg-[#F8F6F1]
                      px-4
                      py-2
                      text-sm
                      text-gray-700
                      transition
                      hover:bg-[#C9A227]
                      hover:text-white
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* Popular */}

            <div className="mt-7">

              <h3 className="font-semibold text-[#083C2A]">
                Popular
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">

                {popular.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      selectSearch(item)
                    }
                    className="
                      rounded-full
                      border
                      border-gray-200
                      px-4
                      py-2
                      text-sm
                      text-gray-700
                      transition
                      hover:border-[#0B5D3B]
                      hover:bg-[#0B5D3B]
                      hover:text-white
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}