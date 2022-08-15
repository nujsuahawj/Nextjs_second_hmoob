import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="card">
        <div className="featured">
            <Image
                src={'https:' + thumbnail.fields.file.url}
                alt={title}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                // layout="fill"
            />
        </div>
        <div className="content">
            <div className="info">
                <h2>{title}</h2>
                <p>ເວລາ{cookingTime}ໃນການຄົວອາຫານນີ້</p>
            </div>
            <div className="actions">
                <Link href={`/recipes/${slug}`}>
                    <a>ລາຍລະອຽດກ</a>
                </Link>
            </div>
        </div>
        <style jsx>
            {`
                .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease-in-out;
                }
                .card:hover {
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                }
                .featured {
                    width: 100%;
                    height: 200px;
                    border-radius: 10px 10px 0px 0px;
                    overflow: hidden;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    border-radius: 0px 0px 10px 10px;
                    transition: all 0.3s ease-in-out;
                }
                .content:hover {
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                }
                .actions {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    border-radius: 0px 0px 10px 10px;
                    transition: all 0.3s ease-in-out;
                }
                .actions:hover {
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                }
                .actions a {
                    text-decoration: none;
                    color: #fff;
                    background: #000;
                    padding: 10px;
                    border-radius: 10px;
                    transition: all 0.3s ease-in-out;
                }
                .actions a:hover {
                    background: #fff;
                    color: #000;
                }
            `}
        </style>
    </div>
  )
}
