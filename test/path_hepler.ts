import { Path_helper } from "../index";
import should from "should";
import path_exists from "path-exists";
import path from "path";

describe("Path_helper", () =>
{
    describe("is_packaged", () =>
    {
        it("must be boolean", () =>
        {
            let is_p = Path_helper.is_packaged()
            should(is_p).be.Boolean()
        })
    })

    describe("get_app_path", () =>
    {
        let app_path = Path_helper.get_app_path()

        it("must be string", () =>
        {
            should(app_path).be.String()
        })

        it("must exists index.js", async () =>
        {
            let is_exists = await path_exists(path.join(app_path, "index.js"))
            should(is_exists).equal(true)
        })

        it("must NOT exists index2.js", async () =>
        {
            let is_exists = await path_exists(path.join(app_path, "index2.js"))
            should(is_exists).equal(false)
        })
    })
})