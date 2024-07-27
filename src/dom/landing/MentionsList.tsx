const MentionItem = ({ name, title, feedback }:any) => {
  return (
    <div className='bg-white tx-black w-max-300px pa-4 tx-altfont-1'
      style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)" }}
    >
      <div className='tx-altfont-2'>{name}</div>
      <div>{title}</div>
      <hr className='opaci-10 mb-2' />
      <i>{feedback}</i>
    </div>
  );
};

const mentions = [
  { name: 'John D.', title: 'Company X', feedback: 'Excellent service! They recovered all our critical data after a major server crash. Highly recommend their IT support.' },
  { name: 'Jane S.', title: 'Freelancer', feedback: 'I thought I had lost all my work after my hard drive failed, but they managed to retrieve everything. Lifesavers!' },
  { name: 'Michael B.', title: 'Startup Inc.', feedback: 'Their IT consultancy helped us set up a reliable data backup system. Now we feel much more secure about our data.' },
  { name: 'Susan K.', title: 'Photographer', feedback: 'They recovered my entire photo library from a damaged drive. I can’t thank them enough!' },
  { name: 'David R.', title: 'Small Business Owner', feedback: 'Professional and efficient. They got our office network back up and running in no time after a malware attack.' },
  { name: 'Linda M.', title: 'Graphic Designer', feedback: 'I was in panic mode after my external hard drive crashed, but they managed to recover all my files. Truly amazing service!' },
  { name: 'Robert C.', title: 'Law Firm', feedback: 'Top-notch data recovery service. They were able to recover sensitive client data that we thought was lost forever.' },
  { name: 'Emily W.', title: 'Writer', feedback: 'When my laptop died, they recovered all my manuscripts and important documents. Highly grateful for their help!' },
];

export const MentionsList = () => {
  return (
    <div className='pos-rel flex-wrap gap-4 w-max-1080px'>
      {mentions.map((mention, index) => (
        <MentionItem
          key={index}
          name={mention.name}
          title={mention.title}
          feedback={mention.feedback}
        />
      ))}
    </div>
  );
};


