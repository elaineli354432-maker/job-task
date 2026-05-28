import { Annotation } from '../data/temples';

type AnnotationListProps = {
  annotations: Annotation[];
};

function AnnotationList({ annotations }: AnnotationListProps) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slateInk">注释</h3>
      <ol className="space-y-2 rounded-xl border border-border bg-white/50 p-4">
        {annotations.map((item) => (
          <li key={`${item.marker}-${item.term}`} className="text-sm leading-7 text-ink/90">
            <span className="mr-1 font-semibold text-accent">{item.marker}</span>
            <span className="font-medium">{item.term}：</span>
            {item.explanation}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default AnnotationList;
