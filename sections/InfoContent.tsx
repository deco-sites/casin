import Button from "$store/components/ui/Button.tsx";
export type paragraph = {
  content: string;
};
export type text = {
  label: string;
  paragraph: paragraph[];
};
export type Props = {
  text: text[];
};
export default function InfoContent(props: Props) {
  return (
    <>
      <div class="container bg-info p-6 mb-4 shadow-lg rounded shadow-blue-800/50 ">
        {props.text.map(({ label, paragraph }) => (
          <div class="container flex flex-col">
            <h2 class="text-3xl mb-2 font-bold">{label}</h2>
            <ul class="flex list-none flex-col gap-2">
              {paragraph.map(({ content }) => (
                <li>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
