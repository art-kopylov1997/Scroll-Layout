import React, {useEffect, useState} from 'react';
import './TodoList.module.scss';
import Checkbox from "../UI/Checkbox/Checkbox";
import styles from "./TodoList.module.scss"
import {Button} from "../UI/Button/Button";
import axios from "axios";


const CURRENT_USER_ID = 10

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/todos',
            );
            setAllTasks(result.data);
            setTasks(getRandom(result.data, 5));
        };
        fetchData();
    }, []);

    function getRandom(arr, n) {
        const filteredArray = arr.filter(task => task.userId === CURRENT_USER_ID)
        let result = new Array(n),
            len = filteredArray.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = filteredArray[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    function randomProperty(obj) {
        let keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    }

    return (
        <div className={styles.root}>
            <div className={styles.backCards}/>

            <div className={styles.mainCard}>
                <div className={styles.mainCardHeader}>
                    <span>Todo list</span>
                    <Button/>
                </div>

                <div className={styles.todoLists}>
                    {
                        tasks.map(task => (
                            <Checkbox
                                key={task.id}
                                title={task.title}
                                description={(randomProperty(allTasks).id % 2) ? randomProperty(allTasks).title : null}
                                isCompleted={task.completed}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;