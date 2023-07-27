import {useMemo} from 'react';

const useSearch = (tasks, searchQuery) => {
    return useMemo(() => {
        if (searchQuery === '') return tasks;
        const newTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
        return newTasks
    }, [searchQuery, tasks])
};

export { useSearch };