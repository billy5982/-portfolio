import { ProjectDetailDesc } from '@/data/ProjectData';

interface DescProps {
  data: ProjectDetailDesc;
}

const DetailDesc = ({ data }: DescProps) => {
  return (
    <>
      {data?.map((el) => (
        <div key={el.title}>
          <h3 className="text-subTitle leading-loose">{el.title}</h3>
          <ul className="text-descSize leading-relaxed list-disc list-inside">
            {el.content.map((desc, id) => (
              <li key={id}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default DetailDesc;
