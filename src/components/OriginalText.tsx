type OriginalTextProps = {
  text: string;
};

function OriginalText({ text }: OriginalTextProps) {
  const highlighted = text.replace(/([①-⑩])/g, '<span class="text-accent font-semibold">$1</span>');
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slateInk">原文</h3>
      <div
        className="rounded-xl border border-border bg-white/50 p-4 leading-8"
        dangerouslySetInnerHTML={{ __html: highlighted.replace(/\n/g, '<br/>') }}
      />
    </section>
  );
}

export default OriginalText;
