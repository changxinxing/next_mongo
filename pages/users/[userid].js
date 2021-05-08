import { connectToDatabase } from '../../util/mongodb'
import { Card, Grid } from 'semantic-ui-react'
const User = ({movies})=>{
    return(
        <Grid centered>
            <Card>   
                <h2>{movies.name}</h2>
                <h3>{movies.email}</h3>            
            </Card>
        </Grid>
    )
    
}

export async function getServerSideProps({query}) {
    const { db } = await connectToDatabase();
    const userid = query.userid;
    const movies = await db
    .collection("userlists")
    .findOne({name:userid});

    return {props:{movies: JSON.parse(JSON.stringify(movies))}}
}

export default User