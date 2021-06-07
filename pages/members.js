import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'
import { Button, Card, Grid } from 'semantic-ui-react'

export default function Movies({ movies }) {
    return (
        <>
            <Grid centered>
            <Card.Group itemsPerRow = {2}>
                {movies.map((movie, index) => (
                    <Card key={index}>
                        <Link href = {`/users/${movie.name}`} >
                            <Button>{movie.name}</Button>                      
                        </Link>
                        <Button inverted color='red'><Link href = {`/removeuser/${movie.name}`}>Remove</Link></Button>
                    </Card>
                    
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