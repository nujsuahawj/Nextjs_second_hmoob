// import createClient from contentful
import { createClient } from 'contentful';
import Link from 'next/link';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_KEY
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'recipe' });

  const paths = res.items.map(recipe => ({
    params: { slug: recipe.fields.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const {items} = await client.getEntries({ content_type: 'recipe', 'fields.slug': params.slug });
  return {
    props: {recipe: items[0]}
  }
}


export default function RecipeDetails({recipe}) {
  const { title, slug, cookingTime, thumbnail, featuredImage, ingredients, method } = recipe.fields;
    return (
      <div>
        <div className="banner">
          <Image
            src={'https:' + featuredImage.fields.file.url}
            alt={title}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            // layout="fill"
          />
          <h2>{ title }</h2>
        </div>
        <div className="info">
          <p>ເວລາ {cookingTime} ໃນການຄົວອາຫານນີ້</p>
          <h3>ລາຍການທີກ່ຽວຂ້ອງ</h3>
          {ingredients.map(ingredient => (
            <span>{ingredient}</span>
          ))}
        </div>
        <div className="method">
          <h3>ລາຍລະອຽດການຄົວອາຫານ</h3>
          <div>
            {documentToReactComponents(method)}
          </div>
        </div>
        <style jsx>{`
          .banner {
            width: 100%;
            height: 200px;
            border-radius: 10px 10px 0px 0px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            transition: all 0.3s ease-in-out;

          }
          .banner:hover {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            background-color: #f5f5f5;
          }
          .banner h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0;
          }
          .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            border-radius: 0px 0px 10px 10px;
            transition: all 0.3s ease-in-out;
          }
          .info:hover {
            background-color: #f5f5f5;
          }
          .method {
            padding: 20px;
            border-radius: 0px 0px 10px 10px;
            transition: all 0.3s ease-in-out;
          }
          .method:hover {
            background-color: #f5f5f5;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 20px;
          }
          h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
          }
          p {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 20px;
          }
          span {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    )
  }