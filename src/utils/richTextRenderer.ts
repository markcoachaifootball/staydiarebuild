
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-4 text-gray-300">{children}</p>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-bold mb-6 text-staydia-gold">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mb-4 text-staydia-gold">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mb-3 text-staydia-gold">{children}</h3>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc ml-6 mb-4 text-gray-300">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal ml-6 mb-4 text-gray-300">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1">{children}</li>,
  },
};

export const renderRichText = (content: any) => {
  return documentToReactComponents(content, richTextOptions);
};
