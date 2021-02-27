import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';



export const Starwars = () => {
    const { isLoading, error, data } = useQuery('1', () =>
        axios('http://swapi.dev/api/people/1/'))

    return (
        <div className="Starwars">
            <h1>React Query testing with Star Wars API</h1>
            {error && <div>Something has gone wrong here...</div>}

            {isLoading ? (
                <div>Retrieving Luke Skywalker Information...</div>
            ) : (
                    <pre>{JSON.stringify(data, null, 2)}
                    </pre>
                )}
        </div>
    )

}