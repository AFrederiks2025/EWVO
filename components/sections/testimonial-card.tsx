import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <span
        aria-hidden
        className="font-serif text-4xl leading-none text-brand"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 leading-relaxed text-balance">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <div className="font-medium">{testimonial.author}</div>
        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
      </figcaption>
    </figure>
  );
}
