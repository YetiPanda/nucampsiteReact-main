import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';

const UserLoginForm = () => {
    const [ loginModalOpen, setLoginModalOpen ] = useState(false);

    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();
}