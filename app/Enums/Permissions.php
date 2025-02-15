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
    case VIEW_AGENCY = 'agency.view';
    case CREATE_AGENCY = 'agency.create';
    case EDIT_AGENCY = 'agency.edit';
    case DELETE_AGENCY = 'agency.delete';
    case VIEW_SINGLE_AGENCY = 'agency.single-view';
    case APPROVE_AGENCY = 'agency.approve';
    case VIEW_VISA = 'visa.view';
    case VIEW_SINGLE_VISA = 'visa.single-view';
    case CREATE_VISA = 'visa.create';
    case EDIT_VISA = 'visa.edit';
    case DELETE_VISA = 'visa.delete';
    case ADD_DOCUMENT_VISA = 'visa.add.document';
    case STATUS_CHANGE_VISA = 'visa.status.change';
    case VIEW_JOB_POST = 'job-post.view';
    case VIEW_SINGLE_JOB_POST = 'job-post.single-view';
    case VIEW_APPLY_JOB_POST = 'job-apply.single-view';
    case CREATE_JOB_POST = 'job-post.create';
    case EDIT_JOB_POST = 'job-post.edit';
    case DELETE_JOB_POST = 'job-post.delete';
    case VIEW_USER = 'user.view';
    case CREATE_USER = 'user.create';
}
