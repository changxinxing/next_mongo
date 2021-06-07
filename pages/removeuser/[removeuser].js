import { connectToDatabase } from '../../util/mongodb'
import { Card, Grid } from 'semantic-ui-react'
const RemoveUser = ()=>{
    return(
        <Grid centered>
            <Card>   
                <h2>Removed</h2>           
            </Card>
        </Grid>
    )   
}

export async function getServerSideProps({query}) {
    const { db } = await connectToDatabase();
    const removeuser = query.removeuser;
    const movies = await db
    .collection("userlists")
    .remove({name:removeuser});

    return {props:{movies: JSON.parse(JSON.stringify(movies))}}
}

export default RemoveUser