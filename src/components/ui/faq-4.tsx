"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect no cliente, useEffect no SSR (evita warning de hidratação).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface FaqCategorizedProps {
  categories?: Array<{
    name: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  }>;
  description?: string;
  title?: string;
  className?: string;
}

const defaultCategories = [
  {
    faqs: [
      {
        answer:
          "Setting up SmoothUI is straightforward. Install the package using npm or pnpm, then import the components you need. Our CLI tool can also help scaffold components directly into your project with the right dependencies.",
        question: "How do I set up SmoothUI in my project?",
      },
      {
        answer:
          "SmoothUI requires React 18 or later, Next.js 13+, and Node.js 18+. You'll also need Tailwind CSS configured in your project. All modern browsers are supported.",
        question: "What are the minimum requirements?",
      },
      {
        answer:
          "Use our CLI command `npx shadcn@latest add @smoothui/component-name` to add any component. This will install the component with all its dependencies and place it in your components directory.",
        question: "How do I add my first component?",
      },
    ],
    name: "Getting Started",
  },
  {
    faqs: [
      {
        answer:
          "Yes, SmoothUI is completely free and open source under the MIT license. You can use it in personal and commercial projects without any cost or attribution requirements.",
        question: "Is SmoothUI free to use?",
      },
      {
        answer:
          "Since SmoothUI is free, there are no purchases to refund. For any premium services or support packages we may offer in the future, our refund policy will be clearly stated.",
        question: "Do you offer refunds?",
      },
      {
        answer:
          "Currently, all components are free. If we introduce premium features, we'll support major credit cards, PayPal, and other popular payment methods through our secure payment processor.",
        question: "What payment methods do you accept?",
      },
    ],
    name: "Billing",
  },
  {
    faqs: [
      {
        answer:
          "SmoothUI supports all modern browsers including Chrome, Firefox, Safari, and Edge. We test across the latest versions and one version back for each browser to ensure compatibility.",
        question: "Which browsers are supported?",
      },
      {
        answer:
          "Components are optimized for performance with tree-shaking support, minimal bundle size, and hardware-accelerated animations. We only animate transform and opacity properties to ensure 60fps animations.",
        question: "How does SmoothUI affect performance?",
      },
      {
        answer:
          "Absolutely! SmoothUI is built with TypeScript and provides full type definitions for all components. You get autocomplete, type checking, and inline documentation in supported editors.",
        question: "Is TypeScript supported?",
      },
      {
        answer:
          "Yes, all components use Tailwind CSS and CSS variables for styling. You can override styles using className props, customize the design tokens, or modify the component source directly.",
        question: "Can I customize component styles?",
      },
    ],
    name: "Technical",
  },
];

export function FaqCategorized({
  title = "Frequently Asked Questions",
  description = "Find answers organized by topic",
  categories = defaultCategories,
  className,
}: FaqCategorizedProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Indicador de aba que desliza (substitui o layoutId do framer): medimos a
  // posição/largura do botão ativo relativas ao tablist e movemos uma barra
  // absoluta via transform + width, com transição suave. Robusto a quebra de
  // linha (mede offsetTop) e a resize.
  const tablistRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, ready: false });

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const el = buttonsRef.current[activeCategory];
      if (!el) return;
      setIndicator({
        left: el.offsetLeft,
        top: el.offsetTop + el.offsetHeight - 2,
        width: el.offsetWidth,
        ready: true,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeCategory, categories]);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenIndex(0);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="animate-faq-reveal mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl text-foreground lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/70 text-lg">
            {description}
          </p>
        </div>

        <div className="animate-faq-reveal mb-8" style={{ animationDelay: "0.1s" }}>
          <div
            ref={tablistRef}
            className="relative flex flex-wrap justify-center gap-2 border-border border-b"
            role="tablist"
          >
            {categories.map((category, index) => (
              <button
                aria-selected={activeCategory === index}
                aria-controls="faq-panel"
                id={`faq-tab-${index}`}
                className={`relative px-4 py-3 font-medium text-sm transition-colors ${
                  activeCategory === index
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                key={category.name}
                onClick={() => handleCategoryChange(index)}
                ref={(el) => {
                  buttonsRef.current[index] = el;
                }}
                role="tab"
                type="button"
              >
                {category.name}
              </button>
            ))}
            {/* Barra que desliza sob a aba ativa */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-[3px] bg-primary transition-[transform,width] duration-300 ease-out"
              style={{
                transform: `translate(${indicator.left}px, ${indicator.top}px)`,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
          </div>
        </div>

        <div
          className="animate-faq-reveal"
          key={activeCategory}
          id="faq-panel"
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeCategory}`}
          tabIndex={0}
        >
          <div className="space-y-4">
            {categories[activeCategory].faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className="animate-faq-reveal overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-primary"
                  key={faq.question}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors hover:bg-background/50"
                    onClick={() => toggleAccordion(index)}
                    type="button"
                  >
                    <h3 className="pr-4 font-medium text-foreground">
                      {faq.question}
                    </h3>
                    <span
                      className={`flex-shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className="h-5 w-5 text-foreground/60"
                      />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqCategorized;
