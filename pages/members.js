import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'
import { Card, Grid } from 'semantic-ui-react'

export default function Movies({ movies }) {
    return (
        <>
            <Grid centered>
            <Card.Group itemsPerRow = {2}>
                {movies.map((movie, index) => (
                    <Link href = {`/users/${movie.name}`} key={index}>
                        <Card>
                        <h2>{movie.name}</h2>
                        </Card>
                    </Link>
                ))}
            </Card.Group>
        </Grid>
        </>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const movies = await db
        .collection("userlists")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    };
}