import React from 'react';
import { useStateValue } from '../StateProvider';

function AccountNotFound() {
    const [
        { accountPath }, ] = useStateValue();
    return (
        <div className="not__found">
            <p className="not__found__number">404</p>
            <p>{accountPath} no existe</p>
        </div>
    );
}

export default AccountNotFound;
