import { gql, useQuery } from '@apollo/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './App.css';

const App = () => {
    const GET_POSTS = gql`
        query {
            posts {
                id
                title
                text
                isPublished
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_POSTS);
    console.log(data);
    const { posts } = data || { posts: [] };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'text', headerName: 'Content', width: 130 },
        {
            field: 'isPublished',
            headerName: 'Published',
            width: 130,
        },
    ];

    const rows = posts;

    return (
        <div style={{ height: 400, width: 1000 }}>
            <DataGrid
                getRowId={(row) => row.id}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default App;
