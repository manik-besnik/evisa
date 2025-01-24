<?php

namespace App\Enums;

enum Permissions: string
{
    case VIEW_ADMIN = 'admin.view';
    case CREATE_ADMIN = 'admin.create';
    case EDIT_ADMIN = 'admin.edit';
    case DELETE_ADMIN = 'admin.delete';
    case VIEW_ROLE = 'role.view';
    case CREATE_ROLE = 'role.create';
    case EDIT_ROLE = 'role.edit';
    case DELETE_ROLE = 'role.delete';
}
